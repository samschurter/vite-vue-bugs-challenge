// When you're ready, flip the RUN_TESTS switch below to true to run the tests.
const RUN_TESTS = false;

class ListNode {
  /** @type {unknown} */
  value;
  /** @type {ListNode | null} */
  next;

  /**
   * @param {unknown} value 
   * @param {ListNode | null} [next] 
   */
  constructor(value, next) {
    this.value = value;
    this.next = next ?? null;
  }
}

const node7 = new ListNode('Elizabeth');
const node6 = new ListNode('Sarah', node7);
const node5 = new ListNode('Karen', node6);
const node4 = new ListNode('Abigail', node5);
const node3 = new ListNode('Judy', node6);
const node2 = new ListNode('Grace', node3);
const node1 = new ListNode('Isabelle', node2);

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode | null}
 */
function getIntersection(list1, list2) {
  /* implement me */
}

console.log('Answer: ', getIntersection(node1, node4)?.value); // Should output `"Sarah"`

const tests = [
  {
    list1: '1 -> 2 -> 3 -> 6 -> 7',
    list2: '4 -> 5 -> 6 -> 7',
    answer: 6,
    note: 'Example test case',
  },
  {
    list1: '1 -> 4 -> 5 -> 6',
    list2: '2 -> 3 -> 4 -> 5 -> 6',
    answer: 4,
    note: 'First list points directly to intersection'
  },
  {
    list1: '3 -> 4 -> 5',
    list2: '1 -> 2 -> 3 -> 4 -> 5',
    answer: 3,
    note: 'First list\'s head is the intersection'
  },
  {
    list1: '1 -> 2 -> 3',
    list2: '4 -> 5 -> 6',
    answer: null,
    note: 'Lists do not intersect'
  },
  {
    list1: '1 -> 2 -> 3',
    list2: '3',
    answer: 3,
    note: 'Last node in each list is intersection'
  },
  {
    list1: '1',
    list2: '1',
    answer: 1,
    note: 'Single identical nodes'
  },
  {
    list1: '1 -> 8',
    list2: '2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9',
    answer: 8,
    note: 'Lists of different lengths'
  },
  {
    list1: '1',
    list2: '2',
    answer: null,
    note: 'Single nodes with no intersection',
  }
]

function test(fn) {
  let numFailed = 0;
  for (const { list1, list2, answer, note } of tests) {
    // Construct nodes according to test definition.
    /** @type {Map<number, ListNode>} */
    const nodes = new Map();
    /**
     * @param {number[]} nodeNumbers
     * @returns {ListNode | null}
     */
    const createNodes = (nodeNumbers) => {
      const n = nodeNumbers[0];
      if (n == null) return null;
      if (nodes.has(n)) return nodes.get(n) ?? null;
      const newNode = new ListNode(n, createNodes(nodeNumbers.slice(1)));
      nodes.set(n, newNode);
      return newNode;
    }
    const [head1, head2] = [list1, list2]
      .map((listString) =>
        listString.replace(/\s/g, '').split('->').map(Number)
      )
      .map((nodeNumbers) => {
        createNodes(nodeNumbers);
        return nodes.get(nodeNumbers[0]);
      });
    // Run test
    const result = fn(head1, head2);
    if ((answer && result !== nodes.get(answer)) || (answer === null && result !== null)) {
      console.error(`\n${note}\nList 1: ${list1}\nList 2: ${list2}\nResult: ${result?.value}\nExpected result: ${answer}`);
      numFailed++;
    }
  }
  if (numFailed === 0) {
    console.log("\nAll tests passed!");
  } else {
    console.log(`\n${numFailed} tests failed.`);
  }
}

if (RUN_TESTS) {
  test(getIntersection);
}