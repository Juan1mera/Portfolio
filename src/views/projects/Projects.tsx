import { items } from "../../assets/proyects"
import InfiniteMenu from "../../components/InfiniteMenu "

function Projects() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <InfiniteMenu items={items}/>
    </div>
  )
}

export default Projects