"use client";

import getDogs from "@/app/utils/functions/callApiExternes/dog_ceo/getDogs";
import Image from "next/image";
import { useEffect } from "react";

export default async function GetAllDogsCallApiExternePage() {
const dogs = await getDogs();
  
  function refreshPage() {
    window.location.reload(false);
  }

  

  return (
    <div>
      <Image alt='dogs' height={500} priority src={dogs.message} width={500} />
      <button onClick={refreshPage}>Une autre chien ? Cliquez ici</button>
    </div>
  );
}
