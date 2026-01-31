def bubble_sort(array)
  i=0
  j=0
  arr_len = array.length

while j < arr_len do
  while i < arr_len do
    if i+1<arr_len
      if array[i] > array[i+1]
        temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      end
    end
    i+=1
  end
  i=0
  arr_len-=1
end
array
end


p bubble_sort([4,3,78,2,0,2])
# [0,2,2,3,4,78]
p bubble_sort([64, 34, 25, 12, 22, 11, 90])
# [11, 12, 22, 25, 34, 64, 90]
