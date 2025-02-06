import React from "react";
import { TransactionsTable } from "../../componets/transcation";
import { ListWithSelectedItem } from "../../componets/listmt/listwsi";
import { MenuWithSearchInput } from "../../componets/menu/menuall";
import { ProfileMenu } from "../../componets/menu/profilemenu";
// import { NotificationsMenu } from "../../componets/menu/notificationmenu";
import { MegaMenuWithPlacement } from "../../componets/megamenu/memuplace";
import { DialogWithForm } from "../../componets/modals/modalmail";
import { DialogDefault } from "../../componets/modals/simplemodal";
import { AccordionCustomStyles } from "../../componets/accordian/accordian";
import { ButtonGroupCustomStyles } from "../../componets/buttom/button.jsx";
import { DrawerWithNavigation } from "../../componets/drawer/drawer.jsx";
import { MasonryGridGallery } from "../../componets/gallery/mansory.jsx";
import { FeaturedImageGallery } from "../../componets/gallery/featured.jsx";
import { GalleryWithTab } from "../../componets/gallery/tabgallery.jsx";
import { IconButtonCustomStyles } from "../../componets/iconbutton/iconbutton.jsx";
import { ImgWithBlurredCaption } from "../../componets/image/image.jsx";
import { CircularPagination } from "../../componets/pagination/pagination.jsx";
import { RatingWithText } from "../../componets/star/star.jsx";
import { SidebarWithBurgerMenu } from "../../componets/sidebar/sidebar.jsx";
import { SliderCustomStyles } from "../../componets/sliderloader/slider/slider.jsx";
import { SpeedDialPlacement } from "../../componets/sliderloader/dail/dail.jsx";
import { CustomSpinner } from "../../componets/sliderloader/loader/loader.jsx";
import { StepperWithContent } from "../../componets/sliderloader/stepper/stepper.jsx";
const mt = () => {
  return (
    <div>
      Ma
      <StepperWithContent></StepperWithContent>
      <div>
        {" "}
        <SpeedDialPlacement></SpeedDialPlacement>
      </div>
      <SliderCustomStyles></SliderCustomStyles>
      <CustomSpinner></CustomSpinner>
      <SidebarWithBurgerMenu></SidebarWithBurgerMenu>
      {/* <RatingWithText></RatingWithText> */}
      {/* <CircularPagination></CircularPagination>
      <ImgWithBlurredCaption></ImgWithBlurredCaption> */}
      {/* <IconButtonCustomStyles></IconButtonCustomStyles>
      <GalleryWithTab></GalleryWithTab>
      <FeaturedImageGallery></FeaturedImageGallery> */}
      {/* <MasonryGridGallery></MasonryGridGallery> */}
      {/* <ButtonGroupCustomStyles></ButtonGroupCustomStyles>
      <AccordionCustomStyles></AccordionCustomStyles> */}
      {/* <DialogDefault></DialogDefault> */}
      {/* <DialogWithForm></DialogWithForm>
      <DrawerWithNavigation></DrawerWithNavigation> */}
      {/* <ListWithSelectedItem></ListWithSelectedItem> */}
      {/* <MenuWithSearchInput></MenuWithSearchInput> */}
      {/* <TransactionsTable></TransactionsTable> */}
      {/* <ProfileMenu></ProfileMenu> */}
      {/* <NotificationsMenu></NotificationsMenu> */}
      {/* <MegaMenuWithPlacement></MegaMenuWithPlacement> */}
    </div>
  );
};

export default mt;
