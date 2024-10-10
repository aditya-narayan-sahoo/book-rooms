"use server";
import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";
import checkAuth from "./checkAuth";

async function getMyBookings() {
  const sessionCookies = cookies().get("appwrite-session");
  if (!sessionCookies) {
    redirect("/login");
  }
  try {
    const { databases } = await createSessionClient(sessionCookies.value);
    //get the userId
    const { user } = await checkAuth();
    if (!user) {
      return { error: "You must be logged in to view bookings" };
    }

    //fetch the user's rooms
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [Query.equal("user_id", user.id)]
    );
    return bookings;
  } catch (err) {
    console.log("Failed to get the user bookings", err);
    return {
      error: "Failed to get bookings",
    };
  }
}

export default getMyBookings;
