"use server";
import { createSessionClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";

async function deleteRoom(roomId) {
  const sessionCookies = cookies().get("appwrite-session");
  if (!sessionCookies) {
    redirect("/login");
  }
  try {
    const { account, databases } = await createSessionClient(
      sessionCookies.value
    );
    //get the userId
    const user = await account.get();
    const userId = user.$id;

    //fetch the user's rooms
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal("user_id", userId)]
    );

    //find the room to delete
    const roomToDelete = rooms.find((room) => room.$id === roomId);
    //delete the room
    if (roomToDelete) {
      await databases.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
        roomToDelete.$id
      );
      //revalidate user rooms and all rooms
      revalidatePath("/room/my", "layout");
      revalidatePath("/", "layout");
      return {
        success: true,
      };
    } else {
      return { error: "Room not found" };
    }
  } catch (err) {
    console.log("Failed to delete room", err);
    return {
      error: "Failed to delete room",
    };
  }
}

export default deleteRoom;
