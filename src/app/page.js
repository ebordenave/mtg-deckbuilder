import Image from "next/image";
import {NavBar} from "@/components/ui/NavBar/NavBar";
import { Button } from "@/components/ui/button";
import {SearchBar} from "@/components/ui/SearchBar/SearchBar";
export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50vw',
      height: '50vh',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <SearchBar />
    </div>
  );
}