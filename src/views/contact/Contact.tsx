import { CustomTitleSection } from "../../components/CustomTitleSection"
import CustomLink from "../../components/ui/CustomLink"

function Contact() {
  return (
    <section 
      id="contact"
      className="flex flex-col justify-start items-center py-40 gap-44 w-full"
    >
        <CustomTitleSection
          topTexts={["LET'S", "BUILD"]}
          bottomTexts={["SOMETHING"]}
          purpleWord="BUILD"
        />
      <div className="min-w-screen flex items-center justify-center">
        <CustomLink text="mera.dev.co@gmail.com" href="" />
      </div>
    </section>
  )
}

export default Contact