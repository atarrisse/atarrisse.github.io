import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "@/styles/colors.scss";
import "@/styles/variables.scss";
import "@/styles/reset.scss";

library.add(fab);
library.add(fas);

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
