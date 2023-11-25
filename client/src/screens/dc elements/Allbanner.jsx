

import React from "react";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import {DataGrid} from "@mui/x-data-grid"

// import SidebarContent from "components/SidebarContent"

import CustomColumnMenu from "components/DataGridCustomColumnMenu";





import {

  DownloadOutlined,

  Email,

  PointOfSale,

  PersonAdd,

  Traffic,
  Edit,
  Delete,

} from "@mui/icons-material";

import {

  Box,

  Button,

  Typography,

  useTheme,

  useMediaQuery,

} from "@mui/material";





// import BreakdownChart from "components/BreakdownChart";

// import OverviewChart from "components/OverviewChart";

// import { useGetDashboardQuery } from "state/api";

import StatBox from "components/StatBox";

import { Sidebar, Menu, MenuItem, SubMenu,sidebarClasses } from 'react-pro-sidebar';

// import 'react-pro-sidebar/dist/css/styles.css'

import { Link } from 'react-router-dom';





import { SettingsOutlined,ChevronLeft,ChevronRightOutlined,HomeOutlined ,ShoppinCartOutlined,Groups2Outlined,ReceiptLongOutlined,PublicOffOutlined,PointOfSaleOutlined,CalendarTodayOutlined,CalendarMonthOutlined,AdminPanelSettingsOutlined,TrendingUpOutlined, ContentCopyOutlined} from '@mui/icons-material';

import {TocOutlinedIcon} from '@mui/icons-material/TocOutlined';

import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

import {} from '@mui/icons-material';

import {useState,useEffect} from "react";

import SidebarContent from "components/SidebarContent";

import {Menu as MenuIcon,IconButton} from "@mui/material"

import Navbar from "components/Navbar";





const AllBanner = () => {

  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 400px, max-width:1280px)");

  const isNonMobile = useMediaQuery("(min-width:600px)");

  // const { data, isLoading } = useGetDashboardQuery();

  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);



  const columns = [

    {

      field: "id",

      headerName: "Id",

      flex: 1,

    },
    {

      field: "image",

      headerName: "Image",

      flex: 1,

    },

    {

      field: "title",

      headerName: "Title",

      flex: 1,

    },

    {

      field: "created",

      headerName: "Date Added",

      flex: 1,

    },

    {

      field: "status",

      headerName: "Active Status",

      flex: 0.5,

      sortable: false,

      // renderCell: (params) => params.value.length,

    },

    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        const id = params.row.id; // Assuming 'id' is a unique identifier for the row
  
        const handleEditAction = () => {
          // Ikkada Edit Action Logic Raasko
          console.log(`Edit action for ID ${id}`);
          // aah Edit Logic ikkada Add chesko
        };
        const handleDeleteAction = () => {
          // Ikkada Delete Action Logic Raasko
          console.log(`Delete action for ID ${id}`);
          // aah Delete Logic ikkada Add chesko
        };
  
        return (
          <div>
            <IconButton
              onClick={handleEditAction}
              aria-label="Edit"
              color="primary"

            >
              <Edit />
            </IconButton>
            <text>|</text>

            <IconButton
              onClick={handleDeleteAction}
              aria-label="Delete"
              color="secondary"
            >
              
              <Delete />
            </IconButton>
          </div>
        );
      },
    },

  ];
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/dashboard_banners/list")
      .then((response) => response.json())
      .then((json) => setBanner(json.data));
  }, []);
  console.log(banner);


  return (







    <Box m="2.5rem 3.5rem" ml="310px">

      <Navbar/>

      <FlexBetween>

        {/* <Header title="Banner"  /> */}



        <Box>



        </Box>

      </FlexBetween>



      <Box

        mt="50px"

        ml="0px"

        display="grid"

        gridTemplateColumns="repeat(12, 1fr)"

        gridAutoRows="160px"

        gap="20px"

        sx={{

          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },

        }}

      >

        {/* ROW 1 */}

        <StatBox

          title="CATEGORY LISTING"

          searchtab={
            <div className="content">
              <div
                id="data_table_wrapper"
                className="dataTables_wrapper"
                role="grid"
              >
                <div className="dataTables_filter" id="data_table_filter">
                  <label>
                    Search &nbsp;&nbsp;
                    <input type="text" aria-controls="data_table" />
                  </label>
                </div>
              </div>
            </div>
          }

          // value={data && data.totalCustomers}

          // increase="+14%"

          // description="Since last month"

          icon={

            <Email

              sx={{ color: theme.palette.secondary[300], fontSize: "40px" }}

            />

          }

        />

               <DataGrid

            // loading={isLoading || !data}

            // getRowId={(row) => row._id}

            // rows={(data && data.transactions) || []}

            disableSelectionOnClick
            rows={banner}
            columns={columns}
            // pageSize={8}
            // checkboxSelection
            getRowId={(row) => String(row._id)}

          />





      </Box>





      <CustomColumnMenu/>









{/* <SidebarContent/> */}









<FlexBetween>

<IconButton onClick={()=>setIsSidebarContentOpen(!isSidebarContentOpen)}>

    <MenuIcon/>

    </IconButton>

</FlexBetween>



</Box>











  );

};



export default AllBanner;