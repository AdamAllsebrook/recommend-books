import { RDS, StackContext } from "sst/constructs";

export function Database({ stack }: StackContext) {
    new RDS(stack, "db", {
        engine: "postgresql11.13",
        defaultDatabaseName: "main",
        migrations: "packages/core/migrations",
    });
}
