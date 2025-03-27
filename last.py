import matplotlib.pyplot as plt

data_size = [100, 500, 1000, 5000, 10000]  # Number of records
query_time_before = [50, 200, 400, 2000, 5000]  # Time in ms
query_time_after = [20, 100, 200, 800, 1500]

plt.scatter(data_size, query_time_before, color='red', label="Before Optimization")
plt.scatter(data_size, query_time_after, color='green', label="After Optimization")
plt.xlabel("Database Size (Records)")
plt.ylabel("Query Execution Time (ms)")
plt.title("Database Query Time vs. Data Size")
plt.legend()
plt.grid(True)
plt.show()