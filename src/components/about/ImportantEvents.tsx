import Header from "@/components/Header";
import InfoBox from "@/components/InfoBox";

const ImportantEvents = () => {
  return (
    <div className="flex h-full w-screen flex-col items-center px-2 md:px-6">
      <Header text="Important Events" />
      <div className="flex w-5/6 justify-center">
        <InfoBox
          text={
            <div className="flex flex-col items-center gap-2 md:gap-10">
              <div className="text-rsd-yellow flex text-2xl font-bold md:text-4xl">
                Fall Quarter Race
              </div>
              College Cup in San Francisco, California
              <div className="text-rsd-yellow flex text-2xl font-bold md:text-4xl">
                Winter Quarter Race
              </div>
              Tempe Dragon Boat Festival in Tempe, Arizona
              <div className="text-rsd-yellow flex text-2xl font-bold md:text-4xl">
                Spring Quarter Race
              </div>
              Baby Long Beach Race in Long Beach, California
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ImportantEvents;
