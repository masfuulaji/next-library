import { createStyles } from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";

const useStyle = createStyles(() => ({
    p: {
        height: `1000px`,
    },
}));

const Home: NextPage = () => {
    const { classes } = useStyle();
    const [opened, setOpened] = useState(false);
    return (
        <>
            <span className={classes.p}>Allo Bos</span>
        </>
    );
};

export default Home;
