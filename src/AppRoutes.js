import Home from "./pages/Home";
import Forms from "./pages/Forms";
import FormsAsRow from "./pages/FormsAsRow";
import FormsValidation from "./pages/FormsValidation";
import BootstrapComponents from "./pages/BootstrapComponents";
import DataBase from "./pages/DataBase";
import MUICore from "./pages/MUICore";
import Charts from "./pages/Charts";
import ChartGanntGrapeCity from "./pages/ChartGanntGrapeCity";
import ChartGanntDHTMLX from "./pages/ChartGanntDHTMLX";
import FastReport from "./pages/FastReport";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/forms',
    element: <Forms />
  },
  {
    path: '/formsAsRow',
    element: <FormsAsRow />
  },
  {
    path: '/formsValidation',
    element: <FormsValidation />
  },
  {
    path: '/bootstrapComponents',
    element: <BootstrapComponents />
  },
  {
    path: '/dataBase',
    element: <DataBase />
  },
  {
    path: '/muiCore',
    element: <MUICore />
  },
  {
    path: '/charts',
    element: <Charts />
  },
  {
    path: '/fastReport',
    element: <FastReport />
  },
  {
    path: '/ganntGrapeCity',
    element: <ChartGanntGrapeCity />
  },
  {
    path: '/ganntDHTMLX',
    element: <ChartGanntDHTMLX />
  }      
];

export default AppRoutes;