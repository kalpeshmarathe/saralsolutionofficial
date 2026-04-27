import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ExternalLink, Trophy, Target, Zap, ListTodo } from 'lucide-react';

const dsaTopicData = {
    arrays: [
        { id: "a1", name: "Reverse the array", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/reverse-a-string/1" },
        { id: "a2", name: "Find max & min in array", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1" },
        { id: "a3", name: "Kth max & min element", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1" },
        { id: "a4", name: "Sort 0s, 1s, 2s (Dutch Flag)", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1" },
        { id: "a5", name: "Move negative elements to one side", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1" },
        { id: "a6", name: "Union & Intersection of 2 arrays", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1" },
        { id: "a7", name: "Cyclically rotate array by one", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1" },
        { id: "a8", name: "Max Subarray Sum (Kadane's)", diff: "Easy", link: "https://leetcode.com/problems/maximum-subarray/" },
        { id: "a9", name: "Minimize the maximum difference between heights", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1" },
        { id: "a10", name: "Minimum no. of Jumps to reach end", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1" },
        { id: "a11", name: "Find the Duplicate Number", diff: "Medium", link: "https://leetcode.com/problems/find-the-duplicate-number/" },
        { id: "a12", name: "Merge 2 sorted arrays without extra space", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1" },
        { id: "a13", name: "Merge Overlapping Intervals", diff: "Medium", link: "https://leetcode.com/problems/merge-intervals/" },
        { id: "a14", name: "Next Permutation", diff: "Medium", link: "https://leetcode.com/problems/next-permutation/" },
        { id: "a15", name: "Count Inversions", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1" },
        { id: "a16", name: "Best time to buy/sell stock", diff: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { id: "a17", name: "Find all pairs with given sum", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1" },
        { id: "a18", name: "Common elements in 3 sorted arrays", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/common-elements1132/1" },
        { id: "a19", name: "Rearrange array in alternating +/-", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/rearrange-array-alternating-positive-and-negative-items-with-o1-extra-space/1" },
        { id: "a20", name: "Subarray with 0 sum", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1" }
    ],
    strings: [
        { id: "s1", name: "Reverse a String", diff: "Easy", link: "https://leetcode.com/problems/reverse-string/" },
        { id: "s2", name: "Palindromic String", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/is-palindrome0546/1" },
        { id: "s3", name: "Find Duplicate characters in string", diff: "Easy", link: "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/" },
        { id: "s4", name: "Why Strings are Immutable in Java?", diff: "Basic", link: "https://www.baeldung.com/java-string-immutable" },
        { id: "s5", name: "Check if one string is rotation of another", diff: "Easy", link: "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/" },
        { id: "s6", name: "Valid Anagram", diff: "Easy", link: "https://leetcode.com/problems/valid-anagram/" },
        { id: "s7", name: "Count and Say", diff: "Medium", link: "https://leetcode.com/problems/count-and-say/" },
        { id: "s8", name: "Longest Palindromic Substring", diff: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
        { id: "s9", name: "Longest Recurring Subsequence", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1" },
        { id: "s10", name: "All Subsequences of a string", diff: "Medium", link: "https://www.geeksforgeeks.org/print-subsequences-string/" },
        { id: "s11", name: "Permutations of a given string", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1" },
        { id: "s12", name: "Split binary string into balanced substrings", diff: "Easy", link: "https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/" },
        { id: "s13", name: "Word Wrap Problem", diff: "Hard", link: "https://practice.geeksforgeeks.org/problems/word-wrap1646/1" },
        { id: "s14", name: "Edit Distance", diff: "Hard", link: "https://leetcode.com/problems/edit-distance/" },
        { id: "s15", name: "Next Greater Number with same digits", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/next-permutation5226/1" }
    ],
    matrix: [
        { id: "m1", name: "Spiral traversal on Matrix", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1" },
        { id: "m2", name: "Search an element in Matrix", diff: "Medium", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
        { id: "m3", name: "Find median in row-wise sorted Matrix", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1" },
        { id: "m4", name: "Find row with max 1s", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1" },
        { id: "m5", name: "Sorted Matrix", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/sorted-matrix2333/1" },
        { id: "m6", name: "Max size rectangle", diff: "Hard", link: "https://practice.geeksforgeeks.org/problems/max-rectangle/1" },
        { id: "m7", name: "Find specific pair in Matrix", diff: "Hard", link: "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/" },
        { id: "m8", name: "Rotate Matrix by 90 degrees", diff: "Medium", link: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/" },
        { id: "m9", name: "Kth smallest element in Matrix", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1" },
        { id: "m10", name: "Common elements in all rows", diff: "Easy", link: "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/" }
    ],
    linkedlist: [
        { id: "l1", name: "Reverse Linked List", diff: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
        { id: "l2", name: "Reverse in groups of given size", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1" },
        { id: "l3", name: "Detect Loop in LL", diff: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
        { id: "l4", name: "Remove Loop in LL", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1" },
        { id: "l5", name: "Find first node of loop", diff: "Easy", link: "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/" },
        { id: "l6", name: "Remove duplicates in sorted LL", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1" },
        { id: "l7", name: "Remove duplicates in unsorted LL", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1" },
        { id: "l8", name: "Move last element to front", diff: "Easy", link: "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/" },
        { id: "l9", name: "Add 1 to a number represented as LL", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1" },
        { id: "l10", name: "Add two numbers represented by LL", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1" },
        { id: "l11", name: "Intersection of two sorted LL", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1" },
        { id: "l12", name: "Intersection Point of two LL", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1" },
        { id: "l13", name: "Merge Sort for LL", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1" },
        { id: "l14", name: "Check if LL is Palindrome", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1" },
        { id: "l15", name: "Middle of LL", diff: "Easy", link: "https://leetcode.com/problems/middle-of-the-linked-list/" }
    ],
    trees: [
        { id: "t1", name: "Level order traversal", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/level-order-traversal/1" },
        { id: "t2", name: "Reverse Level order traversal", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1" },
        { id: "t3", name: "Height of Tree", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1" },
        { id: "t4", name: "Diameter of Tree", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1" },
        { id: "t5", name: "Mirror of Tree", diff: "Easy", link: "https://www.geeksforgeeks.org/create-a-mirror-tree-from-a-given-binary-tree/" },
        { id: "t6", name: "Inorder Traversal (Iterative & Recursive)", diff: "Easy", link: "https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/" },
        { id: "t7", name: "Preorder Traversal (Iterative & Recursive)", diff: "Easy", link: "https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/" },
        { id: "t8", name: "Postorder Traversal (Iterative & Recursive)", diff: "Easy", link: "https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/" },
        { id: "t9", name: "Left View of Tree", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1" },
        { id: "t10", name: "Right View of Tree", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1" },
        { id: "t11", name: "Top View of Tree", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1" },
        { id: "t12", name: "Bottom View of Tree", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1" },
        { id: "t13", name: "ZigZag Traversal", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1" },
        { id: "t14", name: "Check if Tree is Balanced", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1" },
        { id: "t15", name: "Diagonal Traversal", diff: "Medium", link: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/" }
    ],
    bst: [
        { id: "bst1", name: "Search a node in BST", diff: "Easy", link: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
        { id: "bst2", name: "Deletion of a node in BST", diff: "Medium", link: "https://leetcode.com/problems/delete-node-in-a-bst/" },
        { id: "bst3", name: "Find min/max value in BST", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1" },
        { id: "bst4", name: "Find inorder successor/predecessor", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1" },
        { id: "bst5", name: "Check if Tree is BST", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/check-for-bst/1" },
        { id: "bst6", name: "LCA of 2 nodes in BST", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1" },
        { id: "bst7", name: "Construct BST from preorder", diff: "Medium", link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/" },
        { id: "bst8", name: "Binary Tree to BST", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1" },
        { id: "bst9", name: "Balanced BST from normal BST", diff: "Medium", link: "https://www.geeksforgeeks.org/convert-normal-bst-to-balanced-bst/" },
        { id: "bst10", name: "Merge two BSTs", diff: "Medium", link: "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/" }
    ],
    greedy: [
        { id: "g1", name: "Activity Selection Problem", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1" },
        { id: "g2", name: "Job Sequencing Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1" },
        { id: "g3", name: "Huffman Encoding", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1" },
        { id: "g4", name: "Water Connection Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/water-connection-problem5822/1" },
        { id: "g5", name: "Fractional Knapsack", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1" },
        { id: "g6", name: "Greedy algorithm to find min coins", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/choose-and-swap0531/1" },
        { id: "g7", name: "Maximum trains for which stoppage can be provided", diff: "Medium", link: "https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/" },
        { id: "g8", name: "Buy Maximum Stocks if i stocks can be bought on i-th day", diff: "Medium", link: "https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/" },
        { id: "g9", name: "Shop in Candy Store", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/shop-in-candy-store1145/1" },
        { id: "g10", name: "Minimize Cash Flow among friends", diff: "Hard", link: "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/" }
    ],
    backtracking: [
        { id: "bt1", name: "Rat in a maze Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1" },
        { id: "bt2", name: "N-Queen Problem", diff: "Hard", link: "https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1" },
        { id: "bt3", name: "Word Break Problem using Backtracking", diff: "Hard", link: "https://practice.geeksforgeeks.org/problems/word-break-part-23249/1" },
        { id: "bt4", name: "Sudoku Solver", diff: "Hard", link: "https://practice.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1" },
        { id: "bt5", name: "m Coloring Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1" },
        { id: "bt6", name: "Print all Palindromic Partitions", diff: "Medium", link: "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/" },
        { id: "bt7", name: "Subset Sum Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1" },
        { id: "bt8", name: "Knight Tour Problem", diff: "Medium", link: "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/" },
        { id: "bt9", name: "Tug of War", diff: "Hard", link: "https://www.geeksforgeeks.org/tug-of-war/" },
        { id: "bt10", name: "Find shortest path in maze", diff: "Hard", link: "https://www.geeksforgeeks.org/shortest-safe-route-in-a-path-with-landmines/" }
    ],
    stacks: [
        { id: "st1", name: "Implement Stack from Scratch", diff: "Easy", link: "https://www.geeksforgeeks.org/stack-data-structure-introduction-program/" },
        { id: "st2", name: "Implement Queue from Scratch", diff: "Easy", link: "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/" },
        { id: "st3", name: "Implement two stacks in an array", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1" },
        { id: "st4", name: "Find middle element of stack", diff: "Easy", link: "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/" },
        { id: "st5", name: "Implement N stacks in an array", diff: "Hard", link: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/" },
        { id: "st6", name: "Check the expression has valid parenthesis", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1" },
        { id: "st7", name: "Reverse a string using Stack", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1" },
        { id: "st8", name: "Design a stack with getMin() in O(1)", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/get-minimum-element-from-stack/1" },
        { id: "st9", name: "Next Greater Element", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/next-greater-element/1" },
        { id: "st10", name: "The Celebrity Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1" }
    ],
    graphs: [
        { id: "gr1", name: "Create a Graph, print it", diff: "Easy", link: "https://www.geeksforgeeks.org/graph-and-its-representations/" },
        { id: "gr2", name: "BFS Traversal", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
        { id: "gr3", name: "DFS Traversal", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" },
        { id: "gr4", name: "Detect Cycle in Directed Graph (DFS)", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1" },
        { id: "gr5", name: "Detect Cycle in UnDirected Graph (BFS/DFS)", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1" },
        { id: "gr6", name: "Rat in a Maze Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1" },
        { id: "gr7", name: "Steps by Knight", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/steps-by-knight1425/1" },
        { id: "gr8", name: "Flood Fill Algorithm", diff: "Easy", link: "https://leetcode.com/problems/flood-fill/" },
        { id: "gr9", name: "Dijkstra Algorithm", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1" },
        { id: "gr10", name: "Topological Sort", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/topological-sort/1" }
    ],
    dp: [
        { id: "dp1", name: "Coin Change Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/coin-change2448/1" },
        { id: "dp2", name: "0/1 Knapsack Problem", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1" },
        { id: "dp3", name: "Binomial Coefficient Problem", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/nthe-catalan-number0853/1" },
        { id: "dp4", name: "Permutation Coefficient Problem", diff: "Easy", link: "https://www.geeksforgeeks.org/permutation-coefficient/" },
        { id: "dp5", name: "Longest Common Subsequence", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1" },
        { id: "dp6", name: "Longest Repeated Subsequence", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1" },
        { id: "dp7", name: "Longest Increasing Subsequence", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1" },
        { id: "dp8", name: "Space Optimized LCS", diff: "Medium", link: "https://www.geeksforgeeks.org/space-optimized-solution-lcs/" },
        { id: "dp9", name: "LCS of three strings", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/lcs-of-three-strings0028/1" },
        { id: "dp10", name: "Maximum Sum Increasing Subsequence", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1" },
        { id: "dp11", name: "Count all subsequences having product less than K", diff: "Medium", link: "https://www.geeksforgeeks.org/count-subsequences-product-less-k/" },
        { id: "dp12", name: "Longest subsequence such that difference between adjacent is one", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1" },
        { id: "dp13", name: "Maximum Path Sum in matrix", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/maximum-path-sum-in-matrix1507/1" },
        { id: "dp14", name: "Maximum size square sub-matrix with all 1s", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1" },
        { id: "dp15", name: "Maximum sum of pairs with specific difference", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference4612/1" }
    ],
    bit: [
        { id: "b1", name: "Count set bits in an integer", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/set-bits0143/1" },
        { id: "b2", name: "Find the two non-repeating elements in an array", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/finding-number2235/1" },
        { id: "b3", name: "Count number of bits to be flipped to convert A to B", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/bit-difference-1587115620/1" },
        { id: "b4", name: "Count total set bits from 1 to n", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1" },
        { id: "b5", name: "Check if a number is a power of 2", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/power-of-2-1587115620/1" },
        { id: "b6", name: "Find position of the only set bit", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1" },
        { id: "b7", name: "Copy set bits in a range", diff: "Easy", link: "https://www.geeksforgeeks.org/copy-set-bits-in-a-range/" },
        { id: "b8", name: "Divide two integers without using multiplication, division and mod operator", diff: "Medium", link: "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/" },
        { id: "b9", name: "Calculate square of a number without using *, / and pow()", diff: "Medium", link: "https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/" },
        { id: "b10", name: "Power Set", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/power-set4302/1" }
    ],
    search: [
        { id: "se1", name: "Find first and last positions of an element", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1" },
        { id: "se2", name: "Find a Fixed Point in a given array", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1" },
        { id: "se3", name: "Search in a rotated sorted array", diff: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { id: "se4", name: "Square root of an integer", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/square-root/1" },
        { id: "se5", name: "Maximum and minimum of an array using minimum number of comparisons", diff: "Easy", link: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/" },
        { id: "se6", name: "Optimum location of point to minimize total distance", diff: "Hard", link: "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/" },
        { id: "se7", name: "Find the repeating and the missing", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1" },
        { id: "se8", name: "Find majority element", diff: "Medium", link: "https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1" },
        { id: "se9", name: "Searching in an array where adjacent differ by at most k", diff: "Easy", link: "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/" },
        { id: "se10", name: "Find a pair with a given difference", diff: "Easy", link: "https://practice.geeksforgeeks.org/problems/find-pair-given-difference1559/1" }
    ]
};

const DsaSheet = () => {
    const [activeTopic, setActiveTopic] = useState('arrays');
    const [solvedIds, setSolvedIds] = useState(() => {
        const saved = localStorage.getItem('dsa_solved_ids');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('dsa_solved_ids', JSON.stringify(solvedIds));
    }, [solvedIds]);

    const toggleSolved = (id) => {
        setSolvedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const topics = [
        { id: 'arrays', name: 'Arrays' },
        { id: 'strings', name: 'Strings' },
        { id: 'matrix', name: 'Matrix' },
        { id: 'linkedlist', name: 'Linked List' },
        { id: 'trees', name: 'Binary Trees' },
        { id: 'bst', name: 'BST' },
        { id: 'search', name: 'Search & Sort' },
        { id: 'stacks', name: 'Stacks & Queues' },
        { id: 'greedy', name: 'Greedy' },
        { id: 'backtracking', name: 'Backtracking' },
        { id: 'graphs', name: 'Graphs' },
        { id: 'dp', name: 'DP' },
        { id: 'bit', name: 'Bit Manipulation' },
    ];

    const totalQuestions = Object.values(dsaTopicData).flat().length;
    const solvedCount = solvedIds.length;
    const progress = Math.round((solvedCount / totalQuestions) * 100) || 0;

    return (
        <section id="dsa-sheet" className="section-padding bg-[#030712]">
            <div className="container-xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <span className="section-label mb-5 inline-flex">Master Every Pattern</span>
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      className="text-4xl md:text-6xl mb-6 font-black uppercase tracking-tighter">
                      Complete <span className="gradient-text">150+ DSA Sheet</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                      className="text-slate-400 font-medium text-lg">
                      Curated from FAANG interviews. 13 topics, Basic to Advanced. Your one-stop shop for placement prep.
                    </motion.p>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      className="glass-card !p-8 flex items-center gap-6 group hover:border-amber-500/50 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                            <Trophy size={32} />
                        </div>
                        <div>
                            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Total Mastery</div>
                            <div className="text-3xl font-black text-white">{solvedCount} / {totalQuestions}</div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                      className="glass-card !p-8 flex items-center gap-6 group hover:border-amber-500/50 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
                            <Target size={32} />
                        </div>
                        <div>
                            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Roadmap Progress</div>
                            <div className="text-3xl font-black text-white">{progress}%</div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                      className="glass-card !p-8 flex items-center gap-6 group hover:border-amber-500/50 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-300 border border-amber-500/20">
                            <Zap size={32} />
                        </div>
                        <div>
                            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Elite Rating</div>
                            <div className="text-3xl font-black text-white">{progress > 80 ? 'DIAMOND' : progress > 50 ? 'GOLD' : 'SILVER'}</div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Dashboard Area */}
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-3 space-y-2 h-fit lg:sticky lg:top-32">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 px-4">Topics Navigation</div>
                        <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar space-y-2">
                            {topics.map(t => {
                                const topicQs = dsaTopicData[t.id] || [];
                                const topicSolved = topicQs.filter(q => solvedIds.includes(q.id)).length;
                                const topicProgress = Math.round((topicSolved / topicQs.length) * 100) || 0;

                                return (
                                    <button 
                                        key={t.id}
                                        onClick={() => setActiveTopic(t.id)}
                                        className={`w-full flex flex-col p-4 rounded-2xl transition-all duration-300 text-left border ${activeTopic === t.id ? 'bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'}`}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-xs uppercase tracking-tighter">{t.name}</span>
                                            <span className="text-[10px] font-black">{topicSolved}/{topicQs.length}</span>
                                        </div>
                                        <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full transition-all duration-500 ${activeTopic === t.id ? 'bg-black' : 'bg-amber-500'}`} 
                                                style={{ width: `${topicProgress}%` }}
                                            ></div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Question Table */}
                    <div className="lg:col-span-9">
                        <div className="glass-card !p-0 overflow-hidden border-white/5">
                            <div className="bg-white/5 px-8 py-6 flex justify-between items-center border-b border-white/5">
                                <div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1 leading-tight">{topics.find(t => t.id === activeTopic)?.name}</h3>
                                    <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-[10px]">
                                        <ListTodo size={14} />
                                        Interactive Challenge List
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-white leading-none">{(dsaTopicData[activeTopic] || []).filter(q => solvedIds.includes(q.id)).length} / {dsaTopicData[activeTopic]?.length || 0}</div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Solved</div>
                                </div>
                            </div>

                            <div className="divide-y divide-white/5">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTopic}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {(dsaTopicData[activeTopic] || []).length > 0 ? (
                                            (dsaTopicData[activeTopic] || []).map((q) => (
                                                <div 
                                                    key={q.id} 
                                                    className={`flex flex-col md:flex-row md:items-center justify-between p-6 md:px-8 hover:bg-white/[0.02] transition-all group ${solvedIds.includes(q.id) ? 'bg-amber-500/5' : ''}`}
                                                >
                                                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                                                        <button 
                                                            onClick={() => toggleSolved(q.id)}
                                                            className={`transition-all duration-300 transform active:scale-90 ${solvedIds.includes(q.id) ? 'text-amber-500' : 'text-slate-700 hover:text-amber-500'}`}
                                                        >
                                                            {solvedIds.includes(q.id) ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                                                        </button>
                                                        <div>
                                                            <h4 className={`text-lg font-bold tracking-tight mb-1 transition-all ${solvedIds.includes(q.id) ? 'line-through text-slate-500 italic' : 'text-white'}`}>
                                                                {q.name}
                                                            </h4>
                                                            <div className="flex items-center gap-4">
                                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/10 ${
                                                                    q.diff === 'Easy' ? 'text-green-500' : 
                                                                    q.diff === 'Medium' ? 'text-amber-500' : 
                                                                    q.diff === 'Hard' ? 'text-red-500' : 'text-slate-400'
                                                                }`}>
                                                                    {q.diff}
                                                                </span>
                                                                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">FAANG INTERVIEW HUB</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a 
                                                        href={q.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-amber-500 border border-amber-500/30 px-6 py-3.5 rounded-full hover:bg-amber-500 hover:text-black transition-all group/btn"
                                                    >
                                                        Solve Challenge
                                                        <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                                    </a>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-20 text-center">
                                                <div className="text-slate-600 font-black uppercase tracking-[0.3em] text-xs">Curating Questions...</div>
                                                <p className="text-slate-700 text-sm mt-4">Advanced problems for this topic are being synchronized.</p>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DsaSheet;
