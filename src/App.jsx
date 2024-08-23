import React from "react"

import { Hallo } from "./component/Hallo"
import { Project } from "./component/Project"
import { Profile } from "./component/Profile"
import { Bio } from "./component/Bio"
import { TechStack } from "./component/TechStack"
import { Contact } from "./component/Contact"
import { Footer } from "./component/Footer"

function App() {

  return (
    <>
      <div className="min-h-screen p-5 sm:p-5 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="col-span-1">
            <div className="flex flex-wrap gap-4">
              <Hallo />
              <Profile />
              <Bio />
              <TechStack />
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
            <div className="flex flex-wrap gap-4">
              <Project />
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
