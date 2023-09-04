import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
       <h1>아이젠하워 매트릭스</h1>
      </header>
      <nav>
        <label htmlFor="searchItem">검색</label>
        <input id="searchItem" type="text" />
        <button>돋보기</button>
      </nav>
      
      <section>
        매트릭스 영역
        <div className="flex">
         <div className="flex-1 "></div>
          <div className="flex-1 "></div>
          <div className="flex-1 text-center">
            Important
          </div>
          <div className="flex-1"></div>
          <div className="flex-1 "></div>
        </div>
        <div className="flex">
          <div className="flex-1 "></div>
          <div  className="flex-1 border-2 border-indigo-600 w-32 h-32">
           <Link href="/list">Schdule</Link>
          </div>
          <div className="w-2 h-2"></div>
          <div className="flex-1 border-2 border-indigo-600 w-32 h-32">
            <Link href="/list" >Do</Link>
          </div>
          <div className="flex-1 "></div>
        </div>
        <div className="flex h-2">
          <div className="flex-1 -rotate-90 text-center">
            Not Urgent
          </div>
          <div className=" "></div>
          <div className="flex-1 "></div>
          <div className=" "></div>
          <div className="flex-1 rotate-90 text-center">
            Urgent
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 "></div>
          <div className="flex-1 border-2 border-indigo-600 w-32 h-32">
           <Link href="/list" >Delete</Link>
          </div>
          <div className="w-2 h-2"></div>
          <div className="flex-1 border-2 border-indigo-600 w-32 h-32">
            <Link href="/list" >Delegate</Link>
          </div>
          <div className="flex-1 "></div>
        </div>
        <div className="flex">
          <div className="flex-1 "></div>
          <div className="flex-1 "></div>
          <div className="flex-1 text-center">
            Not Important
          </div>
          <div className="flex-1 "></div>
          <div className="flex-1 "></div>
        </div>
      </section>
      <section>
        <Link href="/detail">Item Add</Link>
      </section>
      <section>
        리스트 haha
        <ol>
          <li>1asdf</li>
          <li>2asdf</li>
        </ol>
      </section>
    </main>
  )
}
