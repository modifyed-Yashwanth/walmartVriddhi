import { redirect } from "next/navigation";

function page() {
  redirect("/en");
  return null;
}

export default page;
