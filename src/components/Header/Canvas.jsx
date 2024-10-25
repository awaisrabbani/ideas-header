import { Drawer } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";
import { Tabs } from "flowbite-react";

export default function Component(prop) {
  const { isOpen, setIsOpen, children } = prop;

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="">
        <button onClick={() => setIsOpen(false)}>
          <RxCross2
            className= {!isOpen ? "hidden" :" fixed top-0 left-[321px] z-50 text-white "}
            size={30}
          />
        </button>
        <Drawer
          open={isOpen}
          onClose={handleClose}
          className="px-0 py-0 transition duration-700"
        >
        
          <Drawer.Items>
            <div className="h-screen">
            <Tabs  variant="default">
      <Tabs.Item active title="SHOP" >
            {children}
      </Tabs.Item>
      <Tabs.Item title="Dashboard" className="outline-none">
      {children}
      </Tabs.Item>
      </Tabs>
            </div>
          </Drawer.Items>
        </Drawer>
      </div>
    </>
  );
}
