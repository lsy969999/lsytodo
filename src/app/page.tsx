import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
      />
      <FontAwesomeIcon
        icon={faCircleStop}
      />
      {process.env.TEST}
    </main>
  )
}
