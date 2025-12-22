import { CustomTitleSection } from "../../components/CustomTitleSection";

function Terms() {
  return (
    <div
      id="terms"
      className="flex flex-col justify-start items-start gap-6 sm:gap-8 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28 w-full px-4 sm:px-6 md:px-12"
    >
      <div className="ml-4 sm:ml-8 md:ml-16 lg:ml-28">
        <CustomTitleSection
          topTexts={["TERMS", "&"]}
          bottomTexts={["CONDITIONS"]}
          purpleWord="CONDITIONS"
        />
      </div>

      {/* Contenido centrado */}
      <div className="w-full flex items-center justify-center px-4">
        <div className="text-base sm:text-lg leading-relaxed max-w-5xl space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-purple-light">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-purple-light">
              2. Use License
            </h3>
            <p>
              Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose, or attempt to decompile or reverse engineer any software contained on the website.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-purple-light">
              3. Disclaimer
            </h3>
            <p>
              The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-purple-light">
              4. Limitations
            </h3>
            <p>
              In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if I or my authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-purple-light">
              5. Revisions and Errata
            </h3>
            <p>
              The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on this website are accurate, complete or current. I may make changes to the materials contained on this website at any time without notice.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-purple-light">
              6. Links
            </h3>
            <p>
              I have not reviewed all of the sites linked to this website and am not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by me of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-purple-light">
              7. Modifications
            </h3>
            <p>
              I may revise these terms of service for this website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-gray-700">
            <p className="text-sm font-light">
              Last updated: December 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;