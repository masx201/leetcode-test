import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export function level(nodes: TreeNode[], output: (r: number[]) => void) {
    if (nodes.length === 0) return;

    output(nodes.map((n) => n.val));

    level(
        nodes
            .map((n) => [n.left, n.right].filter(Boolean) as TreeNode[])
            .flat(),
        output,
    );
}
