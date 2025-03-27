import matplotlib.pyplot as plt

tests = ["Test 1", "Test 2", "Test 3", "Test 4"]
before = [1200, 1100, 1050, 1000]
after = [400, 390, 385, 380]

plt.plot(tests, before, marker='o', linestyle='-', color='red', label="Before Optimization")
plt.plot(tests, after, marker='o', linestyle='-', color='green', label="After Optimization")
plt.ylabel("Execution Time (ms)")
plt.title("Performance Improvement Over Multiple Tests")
plt.legend()
plt.grid(True)
plt.show()