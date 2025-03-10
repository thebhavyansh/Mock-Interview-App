import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
<div>
  <h2 classname="flex justify-center items-center ">Login with just username and password </h2>
<section className="bg-white dark:bg-gray-900 flex mt-10 justify-center items-center">
  
        <SignIn />

</section>
</div>

);
  
  
}
