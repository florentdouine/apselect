def where(input, property, value)
  return input unless input.is_a?(Enumerable)
  input = input.values if input.is_a?(Hash)
  input.select do |object|
    input_property = item_property(object, property)
    input_property.to_s == value.to_s || Array(input_property).include?(value.to_s)
  end
end