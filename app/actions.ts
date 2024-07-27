"use server";

import { redirect } from "next/navigation";

export async function CreateUser() {
  //some auth stuff

  return redirect("/success");
}
