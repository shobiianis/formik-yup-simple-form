
import * as Yup from 'yup' //asterick eslye kyu k yup k sari properties ki zaroorat parti hai to asterick means all

const SignUpSchema = Yup.object(
//key me wohi likhna hai jo form k input k name me value di hogi jese name,email,pswd,confirmPswd
//

{
    name        : Yup.string().min(2).required("Please enter Your Name "), 
    email       : Yup.string().email().required("Please enter Your Email"),
    pswd        : Yup.string().min(8).required("please enter Your Password"),
    confirmPswd : Yup.string().required().oneOf([Yup.ref("pswd"),null],"Password is not Matched !")
    // oneof ese work karta hai k agar apko kisi dusre "key" ka reference lena hoto ese lete hain 
    // that k pswd ki value jo k match kare confirmPswd ki value se lazmi
}
)


export default SignUpSchema