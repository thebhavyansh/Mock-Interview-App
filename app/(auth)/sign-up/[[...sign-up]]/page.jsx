import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return
  <div>
  <h2 classname="flex justify-center items-center">Sign up with just username and password </h2>
<section className="bg-white dark:bg-gray-900 mt-10 flex justify-center items-center">
  
       <SignUp />

</section>
</div>
 
  
}
