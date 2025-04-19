"use client";

import { UpdateList } from "@/Actions";
import { useTransition } from "react";

export default function Page() {
  const [isPending, startTrransition] = useTransition();
  const handleClick = () => {
    startTrransition(async () => {
      await UpdateList();
    });
  };
  return (
    <div id="myButton" onClick={() => handleClick()}>
      {isPending ? "Loading" : "Loaded"}
    </div>
  );
}
