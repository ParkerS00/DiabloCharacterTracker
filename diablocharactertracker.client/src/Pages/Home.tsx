import { UserAccountQueries } from "../Queries/UserAccountQueries";

function Home() {
  const { data: user } = UserAccountQueries.useGetUserAccountById(1);
  console.log("User: ", user);

  return (
    <div className="h-screen bg-gradient-to-b from-blood-800 to-blood-950 flex flex-col">
      <div className="flex flex-grow lg:justify-center items-center gap-16 px-16 mt-16 flex-col lg:flex-row">
        <div className="flex flex-col text-center lg:text-left lg:w-1/2">
          <p className="text-blood-50 text-wrap text-xl">
            Welcome to the diablo character tracker, create and track all of
            your different diablo 4 builds here! We have all 6 classes currenlty
            playable in diablo 4 including the Barbarian, Druid, Srocerer,
            Necromancer, Rogue, and the new Spiritborn.
          </p>
          <button className="block mt-4 px-4 py-2 bg-blood-600 text-blood-50 rounded-lg shadow-md hover:bg-blood-800">
            Learn More
          </button>
        </div>
        <div className="flex justify-center items-center w-auto h-auto">
          <img
            className="h-full w-full object-contain shadow-lg rounded-lg"
            src="/D4_LilithWallpaper_1920x1200_16x10_png_jpgcopy.jpg"
            alt="Lilith"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
