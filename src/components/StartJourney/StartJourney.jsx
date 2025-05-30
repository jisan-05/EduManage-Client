export default function StartJourney() {
  return (
    <section className="bg-gray-100 py-30 px-4 md:px-10 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold uppercase tracking-widest text-[#01998c]">
            How We Start Journey
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07a698] to-[#01998c]">
              We Care About Your Life
            </span>{" "}
            For <br />
            Better Future
          </h2>
          <p className="text-md md:text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            This includes offering personalized feedback, fostering a sense of
            community through discussion forums and group projects, and providing
            continuous support to address challenges and improve.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#07a698] to-[#01998c]">
              Master Certified Trainer
            </h3>
            <p className="text-gray-600">
              This includes offering personalized feedback, fostering a sense of
              community through discussion.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#07a698] to-[#01998c]">
              Coach Certification Program
            </h3>
            <p className="text-gray-600">
              This includes offering personalized feedback, fostering a sense of
              community through discussion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
