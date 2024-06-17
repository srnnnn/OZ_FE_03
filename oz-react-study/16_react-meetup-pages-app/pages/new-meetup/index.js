import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const NewMeetUp = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>모임</title>
      </Head>
      <NewMeetupForm router={router} />
    </>
  );
};

export default NewMeetUp;
