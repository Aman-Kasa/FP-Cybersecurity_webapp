import matplotlib.pyplot as plt

labels = ['Database Queries', 'Backend Processing', 'Frontend Rendering']
sizes = [50, 30, 20]  # Example percentage usage
colors = ['red', 'green', 'blue']

plt.pie(sizes, labels=labels, autopct='%1.1f%%', colors=colors, startangle=140)
plt.title("Resource Usage Breakdown")
plt.show()