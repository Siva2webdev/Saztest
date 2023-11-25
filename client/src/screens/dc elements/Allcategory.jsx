import React from "react";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import { DataGrid } from "@mui/x-data-grid"

// import Sidebardc from "components/Sidebardc";

import CustomColumnMenu from "components/DataGridCustomColumnMenu";





import {

    DownloadOutlined,

    Email,

    PointOfSale,

    PersonAdd,

    Traffic,
    Delete,
    Edit

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

import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';

// import 'react-pro-sidebar/dist/css/styles.css'

import { Link } from 'react-router-dom';





import { SettingsOutlined, ChevronLeft, ChevronRightOutlined, HomeOutlined, ShoppinCartOutlined, Groups2Outlined, ReceiptLongOutlined, PublicOffOutlined, PointOfSaleOutlined, CalendarTodayOutlined, CalendarMonthOutlined, AdminPanelSettingsOutlined, TrendingUpOutlined, ContentCopyOutlined } from '@mui/icons-material';

import { TocOutlinedIcon } from '@mui/icons-material/TocOutlined';

import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

import { } from '@mui/icons-material';

import { useState, useEffect } from "react";

import SidebarContent from "components/SidebarContent";

import { Menu as MenuIcon, IconButton } from "@mui/material"

import Navbar from "components/Navbar";
import Sidebardc from "components/sidebardc";





const AllCategory = () => {

    const theme = useTheme();

    const isNonMediumScreens = useMediaQuery("(min-width: 400px, max-width:1280px)");

    const isNonMobile = useMediaQuery("(min-width:600px)");

    // const { data, isLoading } = useGetDashboardQuery();

    const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);



    const columns = [

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

            field: "activestatus",

            headerName: "Active Status",

            flex: 1,



            // renderCell: (params) => params.value.length,

        },

        {
            field: "action",
            headerName: "Actions",
            flex: 1,
            renderCell: (params) => {
              // const id = params.row.id; // Assuming 'id' is a unique identifier for the row

              // const handleEditAction = () => {
              //   // Ikkada Edit Action Logic Raasko
              //   console.log(`Edit action for ID `);
              //   // aah Edit Logic ikkada Add chesko
              // };
              // const handleDeleteAction = () => {
              //   // Ikkada Delete Action Logic Raasko
              //   console.log(`Delete action for ID `);
              //   // aah Delete Logic ikkada Add chesko
              // }

              return (
                <div>
                  <IconButton
                    // onClick={handleEditAction}
                    aria-label="Edit"
                    color="primary"

                  >
                    <Edit />
                  </IconButton>

                  <text>|</text>

                  <IconButton
                    // onClick={handleDeleteAction}
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
    const [allcategory, setAllcategory] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5001/api/dashboard_categories/find")
        .then((response) => response.json())
        .then((json) => setAllcategory(json.data));
    }, []);
    console.log(allcategory);


    return (







        <Box m="1.5rem 2.5rem" ml="300px">

            <FlexBetween>

                {/* <Header title="CONTENT"  /> */}



                <Box>



                </Box>

            </FlexBetween>



            <Box

                mt="20px"

                ml="0px"

                display="grid"

                gridTemplateColumns="repeat(12, 1fr)"

                // gridAutoRows="210px"

                gap="20px"

                sx={{

                    "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },

                }}

            >

                {/* ROW 1 */}

                <StatBox

                    title="CATREGORY LISTING"

                    // value={data && data.totalCustomers}

                    // increase="+14%"

                    // description="Since last month"

                    searchtab={<div className="content">

                        <div id="data_table_wrapper" className="dataTables_wrapper" role="grid">

                            <div className="dataTables_filter" id="data_table_filter">

                                <label>

                                    Search &nbsp;&nbsp;

                                    <input type="text" aria-controls="data_table" />

                                </label>

                            </div>

                        </div>

                    </div>



                    }



                    icon={

                        <Email

                            sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}

                        />

                    }





                />

                <DataGrid

                    // loading={isLoading || !data}

                    // getRowId={(row) => row._id}

                    // rows={(data && data.transactions) || []}

                    rows={allcategory}

                    columns={columns}

                />





            </Box>





            <CustomColumnMenu />









            <Sidebardc/>









            <FlexBetween>

                <IconButton onClick={() => setIsSidebarContentOpen(!isSidebarContentOpen)}>

                    <MenuIcon />

                </IconButton>

            </FlexBetween>













        </Box>











    );

};



export default AllCategory;