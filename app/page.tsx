import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { AnimatedContent } from "../components/AnimatedContent"
import ClientStarBackground from "@/components/ClientStarBackground"

export default function AboutPage() {
  return (
    <div className="dark min-h-screen bg-black text-white relative overflow-hidden">
      <ClientStarBackground />
      <AnimatedContent>
        <div className="overflow-hidden border-0">
          <div className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/thb.png" alt="Profile picture" />
                <AvatarFallback>TB</AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-3xl font-bold text-white">
                  Thad Blankenship
                </h1>
                <div className="flex items-center justify-center mt-1 text-zinc-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Dallas, TX</span>
                </div>
              </div>

              <div className="w-full">
                <h2 className="text-xl font-semibold mb-2">About Me</h2>
                <p className="text-zinc-300">
                  {`I'm a product-focused software engineer. I also lead
                  engineering teams. When I'm not writing code, I like to sail,
                  travel, and spend time with my dogs.`}
                </p>
              </div>

              <div className="w-full">
                <h2 className="text-xl font-semibold mb-2">Interests</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full text-sm">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full text-sm">
                    AI
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full text-sm">
                    UI/UX
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full text-sm">
                    Open Source
                  </span>
                </div>
              </div>

              <div className="w-full">
                <h2 className="text-xl font-semibold mb-2">Find Me</h2>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/tblankenship"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/thaddeusb"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="mailto:thaddeusblankenship@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </div>
  )
}
