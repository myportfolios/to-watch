const enzyme = require("enzyme");
const adapter = require("enzyme-adapter-react-16");

// setup enzyme's react adapter
enzyme.config({ adapter: new adapter() });
