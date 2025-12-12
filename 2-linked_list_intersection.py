# When you're ready, flip the RUN_TESTS switch below to true to run the tests.
RUN_TESTS = False

class ListNode:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

node7 = ListNode('Elizabeth')
node6 = ListNode('Sarah', node7)
node5 = ListNode('Karen', node6)
node4 = ListNode('Abigail', node5)
node3 = ListNode('Judy', node6)
node2 = ListNode('Grace', node3)
node1 = ListNode('Isabelle', node2)

def get_intersection(list1: ListNode, list2: ListNode) -> ListNode|None:
    """
    TODO: Implement this function.
    This must return the intersecting ListNode (by identity), or None if no intersection.
    """
    raise NotImplementedError("get_intersection must be implemented by the candidate")

print("Answer:", getattr(get_intersection(node1, node4), "value", None))  # Should print "Sarah" once implemented

tests = [
    {"list1": "1 -> 2 -> 3 -> 6 -> 7", "list2": "4 -> 5 -> 6 -> 7", "answer": 6, "note": "Example test case"},
    {"list1": "1 -> 4 -> 5 -> 6", "list2": "2 -> 3 -> 4 -> 5 -> 6", "answer": 4, "note": "First list points directly to intersection"},
    {"list1": "3 -> 4 -> 5", "list2": "1 -> 2 -> 3 -> 4 -> 5", "answer": 3, "note": "First list's head is the intersection"},
    {"list1": "1 -> 2 -> 3", "list2": "4 -> 5 -> 6", "answer": None, "note": "Lists do not intersect"},
    {"list1": "1 -> 2 -> 3", "list2": "3", "answer": 3, "note": "Last node in each list is intersection"},
    {"list1": "1", "list2": "1", "answer": 1, "note": "Single identical nodes"},
    {"list1": "1 -> 8", "list2": "2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9", "answer": 8, "note": "Lists of different lengths"},
    {"list1": "1", "list2": "2", "answer": None, "note": "Single nodes with no intersection"},
]

def run_tests(fn):
    num_failed = 0
    for t in tests:
        nodes = {}
        def create_nodes(node_numbers):
            if not node_numbers:
                return None
            n = node_numbers[0]
            if n in nodes:
                return nodes[n]
            next_node = create_nodes(node_numbers[1:]) if len(node_numbers) > 1 else None
            new_node = ListNode(n, next_node)
            nodes[n] = new_node
            return new_node

        def parse_list(s):
            return [int(x) for x in s.replace(" ", "").split("->")]

        list1_nums = parse_list(t["list1"])
        list2_nums = parse_list(t["list2"])
        head1 = create_nodes(list1_nums)
        head2 = create_nodes(list2_nums)

        try:
            result = fn(head1, head2)
        except NotImplementedError:
            print("get_intersection not implemented; aborting tests.")
            return

        expected_node = nodes.get(t["answer"]) if t["answer"] is not None else None
        if (expected_node is not None and result is not expected_node) or (expected_node is None and result is not None):
            print(f"\n{t['note']}\nList 1: {t['list1']}\nList 2: {t['list2']}\nResult: {getattr(result, 'value', None)}\nExpected: {t['answer']}")
            num_failed += 1

    if num_failed == 0:
        print("\nAll tests passed!")
    else:
        print(f"\n{num_failed} tests failed.")

if __name__ == "__main__":
    if RUN_TESTS:
      run_tests(get_intersection)
