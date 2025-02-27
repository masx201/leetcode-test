module;
#include <algorithm>
#include <vector>

export module leetcode_test.frog_jump_ii.Solution;
using std::max;
using std::vector;
namespace leetcode_test::frog_jump_ii {

export class Solution {
public:
    int maxJump(vector<int>& stones)
    {
        // 只有首尾节点的情况的特判
        int res = stones[1] - stones[0];
        // 遍历所有跨度为1的跳跃
        for (int i = 2; i < stones.size(); ++i)
            res = max(res, stones[i] - stones[i - 2]);
        return res;
    }
};
} // namespace leetcode_test::frog_jump_ii