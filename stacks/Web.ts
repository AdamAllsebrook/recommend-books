import { StackContext, SvelteKitSite, } from "sst/constructs";

export function Web({ stack }: StackContext) {
    const site = new SvelteKitSite(stack, "web", {
        path: "packages/web"
    });
    stack.addOutputs({
        url: site.url,
    });
}
