


import Intro from "./lessons/Intro";
import Install from "./lessons/Install";
import Setup from "./lessons/Setup";
import Init from "./lessons/Init";
import Clone from "./lessons/Clone";
import Status from "./lessons/Status";
import Add from "./lessons/Add";
import Commit from "./lessons/Commit";
import Log from "./lessons/Log";
import Branch from "./lessons/Branch";
import Checkout from "./lessons/Checkout";
import Merge from "./lessons/Merge";
import Remote from "./lessons/Remote";
import Push from "./lessons/Push";
import Pull from "./lessons/Pull";
import Stash from "./lessons/Stash";
import Rebase from "./lessons/Rebase";
import CherryPick from "./lessons/CherryPick";
import GitCommandsLesson from "./lessons/GitCommandsLesson";
import SiteOverview from "./SiteOverview";

const lessonComponents = {
  intro: <Intro />,
  install: <Install />,
  setup: <Setup />,
  init: <Init />,
  clone: <Clone />,
  status: <Status />,
  add: <Add />,
  commit: <Commit />,
  log: <Log />,
  branch: <Branch />,
  checkout: <Checkout />,
  merge: <Merge />,
  remote: <Remote />,
  push: <Push />,
  pull: <Pull />,
  stash: <Stash />,
  rebase: <Rebase />,
  "cherry-pick": <CherryPick />,
  all_cammands: <GitCommandsLesson/>
};

const LessonContent = ({ lessonId }) => {
  return (
    <div className="p-4  bg-white shadow rounded">
      {lessonComponents[lessonId] || <SiteOverview/>}
      {/* {lessonComponents[lessonId] || <p>Select a lesson from the sidebar.</p>} */}
    </div>
  );
};

export default LessonContent;
