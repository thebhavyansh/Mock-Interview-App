import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return
  <div>
  <h2 classname="text-center mt-8">Sign up with just username and password </h2>
<section className="bg-white dark:bg-gray-900 flex justify-center items-center">
  
       <SignUp />

</section>
</div>
 
  
}
