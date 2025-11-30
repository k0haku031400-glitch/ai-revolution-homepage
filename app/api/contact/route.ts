import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload: ContactPayload = {
    name: formData.get("name")?.toString(),
    email: formData.get("email")?.toString(),
    company: formData.get("company")?.toString(),
    interest: formData.get("interest")?.toString(),
    message: formData.get("message")?.toString()
  };

  console.log("Contact request received:", payload);

  return NextResponse.json(
    {
      message: "お問い合わせ内容を受け取りました。担当より折り返しご連絡いたします。",
      data: payload
    },
    { status: 200 }
  );
}

