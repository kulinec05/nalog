import React from "react";
import {
    Knopka,
    Btn,
    NalogovyjVychet
} from "./Knopka.style";

const KnopkaComponent = () => {
    return (
        <Knopka>
            <Btn>
                <NalogovyjVychet>Налоговый вычет</NalogovyjVychet>
            </Btn>
        </Knopka>
    );
};

export default KnopkaComponent;