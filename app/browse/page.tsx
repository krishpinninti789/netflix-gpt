import AppHeader from "./components/AppHeader";
import BrowseContainer from "./components/BrowseContainer";

const page = () => {
  return (
    <div className="flex flex-col gap-y-4 py-4 px-8 md:py-6 md:px-10">
      <AppHeader />
      <BrowseContainer />
    </div>
  );
};

export default page;
