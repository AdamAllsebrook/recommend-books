import type { SSTConfig } from "sst";
import { SvelteKitSite, RDS } from "sst/constructs";

export default {
    config(_input) {
        return {
            name: "recommend-books",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app.stack(function Site({ stack }) {
            const rds = new RDS(stack, "Database", {
                engine: "postgresql13.9",
                defaultDatabaseName: "reviews",
                migrations: "migrations",
            });
            const site = new SvelteKitSite(stack, "site");
            stack.addOutputs({
                url: site.url,
            });
        });
    },
} satisfies SSTConfig;
