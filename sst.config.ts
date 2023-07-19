import { SSTConfig } from "sst";
import { Web } from "./stacks/Web";

export default {
    config(_input) {
        return {
            name: "recommend-books-2",
            region: "eu-north-1",
        };
    },
    stacks(app) {
        app
            .stack(Web);
    }
} satisfies SSTConfig;
