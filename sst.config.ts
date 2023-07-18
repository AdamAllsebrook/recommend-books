import { SSTConfig } from "sst";
import { Web } from "./stacks/Web";
import { Database } from "./stacks/Database";

export default {
    config(_input) {
        return {
            name: "recommend-books-2",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app
            .stack(Database)
            .stack(Web);
    }
} satisfies SSTConfig;
