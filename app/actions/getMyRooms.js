"use server";
import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";

async function getMyRooms() {
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
    return rooms;
  } catch (err) {
    console.log("Failed to get the user rooms", err);
    redirect("/error");
  }
}

export default getMyRooms;
