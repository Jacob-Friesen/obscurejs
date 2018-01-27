console.log('Custom array order example:');

function apiCall(callback) {
  const policies = [
    { name: 'reports', readonly: true, editable: false },
    { name: 'dashboard', readonly: true, editable: true },
    { name: 'admin', readonly: false, editable: false }
  ];

  // Simulate an API call
  setTimeout(() => callback(policies), 300);
};

function getListForTable(callback) {
  apiCall((policies) => {
    // Make it ordered like the UI is. In a real application this information
    // could then be displayed in a permission table.
    const uiOrder = ['dashboard', 'reports', 'admin'];
    const orderMap = {};
    uiOrder.forEach((name, index) => orderMap[name] = index);

    const orderedPolicies = [];
    policies.forEach((policy) => {
      const position = orderMap[policy.name];
      orderedPolicies[position] = policy;
    });

    callback(orderedPolicies)
  });
}

getListForTable((orderedPolicies) => {
  console.log('Ordered for the UI:');
  console.log(orderedPolicies);
  // [ { name: 'dashboard', readonly: true, editable: true },
  //   { name: 'reports', readonly: true, editable: false },
  //   { name: 'admin', readonly: false, editable: false } ]
});
