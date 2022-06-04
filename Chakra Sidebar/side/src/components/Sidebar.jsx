import React from 'react'
import { Grid, GridItem,Button} from '@chakra-ui/react'
import {FiHome ,FiTrendingUp ,FiStar ,FiSettings} from "react-icons/fi"
import {MdOutlineExplore} from "react-icons/md"


const Sidebar = () => {
  return (
    <div>
        <Grid bg='wheat'
  h='700px'
  templateRows='repeat(1, 1fr)'
  gap={4}
>
  <GridItem bg='white' width='18%'>
<div><h1 style={{margin:'20px' , fontWeight:'700' , textAlign:'center' , fontSize:"larger"}}>Logo</h1></div>
<div >
<Button leftIcon={<FiHome/>} variant='solid' width='90%' margin='10px' bg='none'>
  Home
</Button>
</div>
<div>
<Button leftIcon={< FiTrendingUp/>}  variant='solid' width='90%' margin='10px' bg='none'>
  Trending
</Button>
</div> 
<div>
<Button leftIcon={<MdOutlineExplore/>}  variant='solid'width='90%' margin='10px' bg='none'>
  Explore
</Button>
</div> 
<div>
<Button leftIcon={< FiStar/>}  variant='solid' width='90%' margin='10px' bg='none'>
  Favourites
</Button>
</div> 
<div>
<Button leftIcon={<FiSettings/>} variant='solid' width='90%'  margin='10px' bg='none'>
  Settings
</Button>
</div>  
</GridItem>
</Grid>
    </div>
  )
}

export default Sidebar