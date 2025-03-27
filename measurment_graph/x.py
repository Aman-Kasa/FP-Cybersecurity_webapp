import matplotlib.pyplot as plt

operations = ["Login", "Quiz Retrieval", "Data Insertion"]
before = [1200, 800, 1500]
after = [400, 250, 600]

plt.bar(operations, before, color='red', label="Before Optimization")
plt.bar(operations, after, color='green', label="After Optimization", alpha=0.7)
plt.ylabel("Execution Time (ms)")
plt.title("Performance Improvement")
plt.legend()
plt.show()