import { endcodeJWT } from "@/components/actions/serverActionAll";
import FormChangePassword from "./formChangePassword";

export default async function ChangePassword() {
    const user = await endcodeJWT()
  return (
    <div>
      <FormChangePassword user= {user}/>
    </div>
  );
}
